# build_master_database.py
import json
import os
import make_programming
import make_technology
import make_animals
import make_fruits
import make_sports
import make_general
from generator_tools import split_tiers

def main():
    print("Building and validating master word database...")
    categories = {
        "programming": make_programming.build_programming(),
        "technology": make_technology.build_technology(),
        "animals": make_animals.build_animals(),
        "fruits": make_fruits.build_fruits(),
        "sports": make_sports.build_sports(),
        "general": make_general.build_general(),
    }

    final_db = {}
    total_words = 0

    print("\n" + "="*70)
    print(f"{'CATEGORY':<20} | {'TOTAL':<8} | {'EASY (3-5)':<12} | {'MEDIUM (6-8)':<14} | {'HARD (9+)':<10}")
    print("="*70)

    for cat_name, items in categories.items():
        assert len(items) >= 500, f"Error: {cat_name} has {len(items)} items, minimum 500 required!"
        tiers = split_tiers(items)
        assert len(tiers['easy']) > 0, f"Error: {cat_name} missing easy tier"
        assert len(tiers['medium']) > 0, f"Error: {cat_name} missing medium tier"
        assert len(tiers['hard']) > 0, f"Error: {cat_name} missing hard tier"

        # Check word uniqueness inside category
        words = [x['word'] for x in items]
        assert len(words) == len(set(words)), f"Duplicate words detected in {cat_name}!"

        final_db[cat_name] = tiers
        total_words += len(items)
        print(f"{cat_name.capitalize():<20} | {len(items):<8} | {len(tiers['easy']):<12} | {len(tiers['medium']):<14} | {len(tiers['hard']):<10}")

    print("="*70)
    print(f"GRAND TOTAL QUESTIONS: {total_words}")
    print("="*70 + "\n")

    # Serialize to words.js
    db_json = json.dumps(final_db, indent=2, ensure_ascii=False)
    js_content = f"""/**
 * Word Guessing Game - Master Word Database
 * Total Questions: {total_words} (Minimum 500+ questions per category)
 *
 * Categories:
 * - Programming ({len(categories['programming'])} questions)
 * - Technology ({len(categories['technology'])} questions)
 * - Animals ({len(categories['animals'])} questions)
 * - Fruits & Botany ({len(categories['fruits'])} questions)
 * - Sports & Athletics ({len(categories['sports'])} questions)
 * - General Knowledge ({len(categories['general'])} questions)
 *
 * Difficulty Tiers:
 * - Easy: 3-5 letters
 * - Medium: 6-8 letters
 * - Hard: 9+ letters
 */

window.WORD_DATABASE = {db_json};
"""

    output_path = os.path.join(os.path.dirname(__file__), '..', 'words.js')
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(js_content)

    print("Successfully generated 'words.js'!")

if __name__ == '__main__':
    main()

