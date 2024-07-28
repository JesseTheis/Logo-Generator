class svgLogoColor {
    constuctor() {
        this.color = '';
    }
    setColor(colorVar) {
        this.color = colorVar;
    }
}

class triangle extends svgLogoColor {
    render() {
        return `<polygon points="50,0 100,100 0,100" fill="${this.color}" />`
    }
}

class square extends svgLogoColor {
    render() {
        return `<rect width="100" height="100" fill="${this.color}" />`
    }
}

class circle extends svgLogoColor {
    render() {
        return `<circle cx="50" cy="50" r="50" fill="${this.color}" />`
    }
}