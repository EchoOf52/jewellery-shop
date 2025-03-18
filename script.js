let r_btn = document.querySelector(".ri-arrow-right-line");
let l_btn = document.querySelector(".ri-arrow-left-line");
let mod1 = document.querySelector(".model-1");
let mod2 = document.querySelector(".model-2");
let mod3 = document.querySelector(".model-3");

r_btn.addEventListener("click", () => {
    mod2.src = "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    mod1.src = "https://images.unsplash.com/photo-1611087388916-b6c97e01735b?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    mod3.src = "https://images.unsplash.com/photo-1608042314453-ae338d80c427?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
});

l_btn.addEventListener("click", () => {
    mod2.src = "https://images.unsplash.com/photo-1607703829739-c05b7beddf60?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    mod1.src = "https://images.unsplash.com/photo-1608508644127-ba99d7732fee?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    mod3.src = "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
})
