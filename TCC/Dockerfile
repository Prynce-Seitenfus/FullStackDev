# Dockerfile for STM32CubeIDE installation 
FROM ubuntu:24.04

# Update package lists
RUN apt-get update && \
    apt-get install -y git expect xvfb && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Copy STM32CubeIDE installers
COPY installers/ /installers/

# Make the extracted installation script executable
RUN chmod +x /installers/st-stm32cubeide_1.18.1_24813_20250409_2138_amd64.sh && \
    chmod +x /installers/auto-interaction.exp

# Debug: Test the execution of the expect script
RUN expect /installers/auto-interaction.exp

# Remove the installers folder to reduce image size
RUN rm -rf /installers

# Copy the test-board project
COPY test-board/ /test-board/