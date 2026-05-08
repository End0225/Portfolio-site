document.addEventListener('click', (e) => {
    for(let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 3;
        
        particle.style.cssText = `
            position: fixed;
            width: 6px;
            height: 6px;
            background: radial-gradient(circle, palegreen, palegreen);
            border-radius: 50%;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
            pointer-events: none;
            z-index: 9999;
        `;
        
        document.body.appendChild(particle);
        
        let x = e.clientX;
        let y = e.clientY;
        let opacity = 1;
        
        const animate = () => {
            x += Math.cos(angle) * velocity;
            y += Math.sin(angle) * velocity;
            opacity -= 0.02;
            
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;
            particle.style.opacity = opacity;
            
            if (opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                particle.remove();
            }
        };
        
        animate();
    }
});