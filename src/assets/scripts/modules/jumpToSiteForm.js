
document.body.addEventListener('click', (evt) => {
    const target = evt.target.closest('[data-open-call-popup]');
    if (!target) return;
    document.querySelector('.conditions_form').scrollIntoView({ behavior: "smooth", });
    setTimeout(() => {
        document.querySelector('[id="name_conditions"]').focus()
    }, 1000);
})

