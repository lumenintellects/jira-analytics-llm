# jira-qa-analytics-llm

By combining the OpenAI API, LangChain, and a user-friendly interface, this solution enables quality assurance personnel to efficiently retrieve answers to their questions about Jira bug reports. It streamlines the interaction with the language model while prioritizing usability and ease of use.

## Quick start

1. Add .env file containing OPENAI_API_KEY to jira-qa-chat-service directory
2. Run build_images.sh to build Docker images
3. Execute 'docker compose up'
4. Wait for 'Jira QA Chat is up and running' in terminal
5. Open http://localhost:4200/ in browser