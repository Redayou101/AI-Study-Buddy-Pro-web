def get_ai_response(user_text, mode):
    # هنا نحدد لجوجل إيش يسوي بالضبط بناءً على اختيار المستخدم في واجهة رضا
    if mode == "summarize":
        instruction = "Summarize this professionally for a student."
    elif mode == "quiz":
        instruction = "Generate 3 multiple choice questions based on this text."
    elif mode == "simplify":
        instruction = "Explain this like I am 5 years old (ELI5)."
    else:
        instruction = "Analyze this text."

    # دمج التعليمات مع نص المستخدم
    full_prompt = f"{instruction}\n\nText: {user_text}"
    
    response = model.generate_content(full_prompt)
    return response.text
