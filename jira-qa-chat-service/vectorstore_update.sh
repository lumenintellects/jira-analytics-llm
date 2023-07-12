#!/bin/bash

# Log message
echo "-------------------- Jira QA Chat is loading, please wait --------------------"

# Run the update_vectorstore() function
python -c "from jira_chat import update_vectorstore; update_vectorstore()"

# Start the FastAPI application with uvicorn
uvicorn main:app --host 0.0.0.0 --port 8000 &

# Log message
echo "-------------------- Jira QA Chat is up and running --------------------"
echo "Open http://localhost:4200/ in your browser"

# Keep the container running
tail -f /dev/null
