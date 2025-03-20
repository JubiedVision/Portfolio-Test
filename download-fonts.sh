#!/bin/bash

# Create fonts directory if it doesn't exist
mkdir -p client/public/fonts

# URLs for Circular Std fonts
BOOK_URL="https://db.onlinewebfonts.com/t/860c3ec7bbc5da3e97233ccecafe512e.woff2"
MEDIUM_URL="https://db.onlinewebfonts.com/t/9475d6a0b79c164f9f605673714e75d9.woff2"
BOLD_URL="https://db.onlinewebfonts.com/t/961a181da27e7cbc072ec2fb5bbfe2a9.woff2"
BLACK_URL="https://db.onlinewebfonts.com/t/14a1403aaf65a2a5c196cb56feea1c25.woff2"

# Download fonts
echo "Downloading Circular Std fonts..."
curl -L -o client/public/fonts/CircularStd-Book.woff2 $BOOK_URL
curl -L -o client/public/fonts/CircularStd-Medium.woff2 $MEDIUM_URL
curl -L -o client/public/fonts/CircularStd-Bold.woff2 $BOLD_URL
curl -L -o client/public/fonts/CircularStd-Black.woff2 $BLACK_URL

echo "Fonts downloaded successfully!"