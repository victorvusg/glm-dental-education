from load_model import tokenizer, model

# Encode a text prompt
text = "Today is a beautiful day"
encoded_input = tokenizer.encode(text, return_tensors='pt')

# Generate a response from the model
output = model.generate(encoded_input, max_length=50)
generated_text = tokenizer.decode(output[0], skip_special_tokens=True)
print(generated_text)
