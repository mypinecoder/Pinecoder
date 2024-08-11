import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import TypeWriteEffect from './TypeWriteEffect';

const Background = () => {
    const canvasRef = useRef(null);
    const largeHeaderRef = useRef(null);
    const points = useRef([]);
    const target = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });
    let ctx;
    let animateHeader = true;

    useEffect(() => {
        const initHeader = () => {
            const { width, height } = dimensions;
            target.current = { x: width / 4.5, y: height / 2.3 };

            const largeHeader = largeHeaderRef.current;
            largeHeader.style.height = `${height}px`;

            const canvas = canvasRef.current;
            canvas.width = width;
            canvas.height = height;
            ctx = canvas.getContext('2d');

            points.current = [];
            for (let x = 0; x < width; x += width / 30) {
                for (let y = 0; y < height; y += height / 30) {
                    const px = x + (Math.random() * width) / 20;
                    const py = y + (Math.random() * height) / 20;
                    const p = { x: px, originX: px, y: py, originY: py };
                    points.current.push(p);
                }
            }

            points.current.forEach(p1 => {
                const closest = [];
                points.current.forEach(p2 => {
                    if (p1 !== p2) {
                        let placed = false;
                        for (let k = 0; k < 5; k++) {
                            if (!placed) {
                                if (closest[k] === undefined) {
                                    closest[k] = p2;
                                    placed = true;
                                }
                            }
                        }

                        for (let k = 0; k < 5; k++) {
                            if (!placed) {
                                if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                                    closest[k] = p2;
                                    placed = true;
                                }
                            }
                        }
                    }
                });
                p1.closest = closest;
            });

            points.current.forEach(point => {
                const c = new Circle(point, 2 + Math.random() * 2, 'rgba(255,255,255,0.3)');
                point.circle = c;
            });
        };

        const initAnimation = () => {
            animate();
            points.current.forEach(shiftPoint);
        };

        const addListeners = () => {
            window.addEventListener('resize', handleResize);
        };

        initHeader();
        initAnimation();
        addListeners();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [dimensions]);

    const handleResize = () => {
        setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    const animate = () => {
        const { width, height } = dimensions;
        if (animateHeader) {
            ctx.clearRect(0, 0, width, height);
            points.current.forEach(point => {
                const distance = Math.abs(getDistance(target.current, point));
                if (distance < 4000) {
                    point.active = 0.3;
                    point.circle.active = 0.6;
                } else if (distance < 20000) {
                    point.active = 0.1;
                    point.circle.active = 0.3;
                } else if (distance < 40000) {
                    point.active = 0.02;
                    point.circle.active = 0.1;
                } else {
                    point.active = 0;
                    point.circle.active = 0;
                }

                drawLines(point);
                point.circle.draw();
            });
        }
        requestAnimationFrame(animate);
    };

    const shiftPoint = p => {
        gsap.to(p, {
            duration: 1 + Math.random(),
            x: p.originX - 50 + Math.random() * 100,
            y: p.originY - 50 + Math.random() * 100,
            ease: "circ.inOut",
            onComplete: () => shiftPoint(p),
        });
    };

    const drawLines = p => {
        if (!p.active) return;
        p.closest.forEach(close => {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(close.x, close.y);
            ctx.strokeStyle = `rgba(156,217,249,${p.active})`;
            ctx.stroke();
        });
    };

    function Circle(pos, rad, color) {
        this.pos = pos || null;
        this.radius = rad || null;
        this.color = color || null;

        this.draw = () => {
            if (!this.active) return;
            ctx.beginPath();
            ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
            ctx.fillStyle = `rgba(156,217,249,${this.active})`;
            ctx.fill();
        };
    }

    const getDistance = (p1, p2) => {
        return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    };

    return (
        <div id="large-header" className="large-header relative" ref={largeHeaderRef}>
            <canvas id="demo-canvas" ref={canvasRef}></canvas>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-10 py-6">
                <div className="text-4xl md:text-7xl font-semibold mt-20 text-center">
                    Welcome to
                    <TypeWriteEffect />
                </div>
                <h1 className='text-gray-400 font-bold text-lg md:text-2xl py-5 text-center'>
                    Introducing Pinecoder.in: The Future of Automation & Trading
                </h1>
                <p className='text-gray-300 text-center'>
                    Welcome to Pinecoder.in, your gateway to the most advanced algo development service in India.
                </p>
                <p className='text-gray-300 text-center'>
                    Since our inception, we&apos;ve been committed to revolutionizing the way you trade.
                </p>
            </div>
        </div>
    );
};

export default Background;
