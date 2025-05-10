const observer =
    new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (
                    entry.isIntersecting
                ) {
                    entry.target.classList.add(
                        "animate"
                    );
                    observer.unobserve(
                        entry.target
                    );
                }
            });
        },
        { threshold: 0.1 }
    );

document
    .querySelectorAll(".fadeIn")
    .forEach((el) => {
        observer.observe(el);
    });
