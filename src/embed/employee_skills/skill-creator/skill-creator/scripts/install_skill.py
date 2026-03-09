#!/usr/bin/env python3
"""
Install a skill to ~/.openocta/skills (managed skills directory).

Usage:
    install_skill.py <path/to/skill-folder> [--dry-run]

Example:
    install_skill.py /tmp/my-skill
    install_skill.py /tmp/my-skill --dry-run
"""

import argparse
import os
import shutil
import sys
from pathlib import Path

# Allow importing quick_validate from same directory
sys.path.insert(0, str(Path(__file__).parent))
from quick_validate import validate_skill


def get_managed_skills_dir():
    """Resolve ~/.openocta/skills (or Windows equivalent)."""
    home = Path.home()
    if os.name == "nt":
        app_data = os.environ.get("APPDATA") or os.environ.get("LOCALAPPDATA")
        if app_data:
            base = Path(app_data) / "openocta"
        else:
            base = home / "AppData" / "Roaming" / "openocta"
    else:
        base = home / ".openocta"
    return base / "skills"


def install_skill(skill_path, dry_run=False):
    """
    Install a skill to ~/.openocta/skills.

    Returns:
        (success: bool, message: str)
    """
    skill_path = Path(skill_path).resolve()

    if not skill_path.exists():
        return False, f"Skill path not found: {skill_path}"

    if not skill_path.is_dir():
        return False, f"Path is not a directory: {skill_path}"

    skill_md = skill_path / "SKILL.md"
    if not skill_md.exists():
        return False, "SKILL.md not found"

    valid, msg = validate_skill(skill_path)
    if not valid:
        return False, f"Validation failed: {msg}"

    skill_name = skill_path.name
    dest_dir = get_managed_skills_dir() / skill_name

    if dry_run:
        return True, f"[DRY-RUN] Would copy {skill_path} -> {dest_dir}"

    dest_dir.parent.mkdir(parents=True, exist_ok=True)

    if dest_dir.exists():
        shutil.rmtree(dest_dir)

    shutil.copytree(skill_path, dest_dir)
    return True, f"Installed to {dest_dir}"


def main():
    parser = argparse.ArgumentParser(description="Install skill to ~/.openocta/skills")
    parser.add_argument("skill_path", help="Path to skill folder")
    parser.add_argument("--dry-run", action="store_true", help="Show what would be done")
    args = parser.parse_args()

    ok, msg = install_skill(args.skill_path, dry_run=args.dry_run)
    print(msg)
    sys.exit(0 if ok else 1)


if __name__ == "__main__":
    main()
