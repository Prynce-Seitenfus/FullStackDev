# Dockerfile for STM32CubeIDE installation 
FROM ubuntu:20.04

# Update package lists
RUN apt update && apt install -y --no-install-recommends unzip expect

# Copy all installation scripts to the /installers directory in the image
COPY installers/ /installers/

# Extract a zip file
RUN unzip /installers/en.st-stm32cubeide_1.18.1_24813_20250409_2138_amd64.sh.zip -d /installers/

# Make the extracted installation script executable
RUN chmod +x /installers/st-stm32cubeide_1.18.1_24813_20250409_2138_amd64.sh

# Make the expect script executable
RUN chmod +x /installers/auto-interaction.exp

# Debug: Test the execution of the expect script
RUN expect /installers/auto-interaction.exp /installers/st-stm32cubeide_1.18.1_2s4813_20250409_2138_amd64.sh

# Remove the installers folder to reduce image size
RUN rm -rf /installers