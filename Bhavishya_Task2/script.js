const roles = [
"Computer Science Student",
"Full Stack Developer",
"Python Programmer",
"Web Developer"
];

let roleIndex = 0;
let charIndex = 0;

function typeEffect() {

```
const typing = document.getElementById("typing");

if (charIndex < roles[roleIndex].length) {

    typing.textContent += roles[roleIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeEffect, 100);

} else {

    setTimeout(eraseEffect, 1500);

}
```

}

function eraseEffect() {

```
const typing = document.getElementById("typing");

if (typing.textContent.length > 0) {

    typing.textContent =
        typing.textContent.slice(0, -1);

    setTimeout(eraseEffect, 50);

} else {

    roleIndex++;

    if (roleIndex >= roles.length) {
        roleIndex = 0;
    }

    charIndex = 0;

    setTimeout(typeEffect, 300);
}
```

}

window.onload = typeEffect;
