# generator_tools.py
import re

def clean_word(w):
    cleaned = re.sub(r'[^A-Za-z]', '', w).upper()
    assert len(cleaned) >= 3, f"Word '{w}' is too short ({len(cleaned)} chars)"
    assert cleaned.isalpha(), f"Word '{w}' is not alphabetic"
    return cleaned

def add_entry(cat_list, seen_set, word, category, hint, extra_hint):
    w = clean_word(word)
    if w in seen_set:
        return False
    seen_set.add(w)
    cat_list.append({
        "word": w,
        "category": category.strip(),
        "hint": hint.strip(),
        "extraHint": extra_hint.strip()
    })
    return True

def get_tier(w):
    length = len(w)
    if length <= 5:
        return 'easy'
    elif length <= 8:
        return 'medium'
    else:
        return 'hard'

def split_tiers(cat_list):
    tiers = {'easy': [], 'medium': [], 'hard': []}
    for item in cat_list:
        tiers[get_tier(item['word'])].append(item)
    return tiers

def print_summary(name, cat_list):
    tiers = split_tiers(cat_list)
    print(f"[{name.upper()}] Total: {len(cat_list)} | Easy: {len(tiers['easy'])} | Medium: {len(tiers['medium'])} | Hard: {len(tiers['hard'])}")
    assert len(cat_list) >= 500, f"FAILED: {name} has only {len(cat_list)} items (< 500)"

