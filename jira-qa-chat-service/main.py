import uvicorn

from jira_chat import answer_question
from fastapi import Query


from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=['http://localhost:4200'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)


@app.get("/answer")
def get_answer(query: str = Query(..., min_length=1)):
    response = answer_question(query)
    return response


if __name__ == '__main__':
    uvicorn.run(app, host="0.0.0.0", port=8000)
