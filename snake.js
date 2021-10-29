class snake {
    constructor(game) {
        this.game = game;
        this.x = 0;
        this.y = 0;
        this.grid = 30;
        this.dx = this.grid;
        this.dy = 0;
    }

    update() {
        this.x += this.dx;
        this.y += this.dy;
        this.catchHandle()
    }

    draw() {
        this.game.context.fillStyle = 'white'
        this.game.context.fillRect(this.x, this.y, this.grid, this.grid)
    }

    catchHandle() {
        document.addEventListener('keydown', (e) => {
            if (e.which === 37) {
                this.dx = -this.grid;
                this.dy = 0;
            }
            if (e.which === 38) {
                this.dx = 0;
                this.dy = -this.grid;
            }
            if (e.which === 39) {
                this.dx = this.grid;
                this.dy = 0;
            }
            if (e.which === 40) {
                this.dx = 0;
                this.dy = this.grid;
            }

        })
    }
}