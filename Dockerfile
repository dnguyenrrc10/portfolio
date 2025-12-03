# Use Node image to build the React app
FROM node:18-alpine

# Working directory as required: lastName_firstName_final_site
WORKDIR /Nguyen_Khoa_final_site

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the project
COPY . .

# Build the production React app
RUN npm run build

# Install a simple static file server
RUN npm install -g serve

# Expose the port the app will run on INSIDE the container
EXPOSE 5575

# Run the production build with serve on port 5575
CMD ["serve", "-s", "build", "-l", "5575"]
