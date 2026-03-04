run:
	@echo "Serving on http://localhost:8000"
	@python3 -m http.server 8000 2>/dev/null

status:
	@git status
	@read -p "Press Enter to clear..." _
	@clear
