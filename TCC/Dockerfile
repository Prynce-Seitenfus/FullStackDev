# Dockerfile for STM32CubeIDE installation 
FROM ubuntu

# Update package lists
RUN apt update && \
    apt install -y expect && \
    apt-get install -y xvfb

# Copy STM32CubeIDE installer and scripts individually
COPY installers/st-stm32cubeide_1.18.1_24813_20250409_2138_amd64.sh /installers/
COPY installers/auto-interaction.exp /installers/

# Make the extracted installation script executable
RUN chmod +x /installers/st-stm32cubeide_1.18.1_24813_20250409_2138_amd64.sh && \
    chmod +x /installers/auto-interaction.exp

# Debug: Test the execution of the expect script
RUN expect /installers/auto-interaction.exp

# Remove the installers folder to reduce image size
RUN rm -rf /installers

# Copy the test-board project
COPY test-board/ /test-board/