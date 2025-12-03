# Portfolio React – Docker Instructions

- Run on **http://localhost:5575**

---

## Prerequisites

---

## 1. Build the Docker image

docker build -t nguyen_khoa_portfolio .

## 2. Run the container

docker run --name nguyen_khoa_coding_assignment14 -p 5575:5575 nguyen_khoa_portfolio

## 2. Stop the container

docker stop nguyen_khoa_coding_assignment14

## 2. Remove the container

docker rm nguyen_khoa_coding_assignment14

# test husky pre commit

git add .
git commit -m "test pre-commit hook"
git commit -m "your message" --no-verify
