from transformers import GPT2LMHeadModel, GPT2Tokenizer

# Load pre-trained model tokenizer
tokenizer = GPT2Tokenizer.from_pretrained("gpt2")

# Load pre-trained model
model = GPT2LMHeadModel.from_pretrained("gpt2")

# Set the model to evaluation mode to deactivate the training-specific behaviors
model.eval()

