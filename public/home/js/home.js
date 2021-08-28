const listInput = document.querySelectorAll('.contacto__row-input__input-group__input');
const listInputMovil = document.querySelectorAll('.contacto__form__input-group__input');

const listLabel = document.querySelectorAll('label');
const listLabelMovil = document.querySelectorAll('.contacto__form__input-group__label');

const formDesktop = document.getElementById('formDesktop')
const formMovil = document.getElementById('formMovil')

const cssForm = (input, index) => {

    input.addEventListener('focus', function(e) {

        console.log('object');
        
        listLabel[index].classList.add("active")
        listLabelMovil[index].classList.add("active")
    })

    input.addEventListener('blur', function(e) {

        const value = input.value

        if (!value || value === '') {

            listLabel[index].classList.remove("active")
            listLabelMovil[index].classList.remove("active")
            
        }
    })
}


listInput.forEach( cssForm )
listInputMovil.forEach( cssForm )


const processData = async ( form ) => {

    let formData = new FormData(form);
    
    let nombre = formData.get('nombre');
    let correo = formData.get('correo');
    let telefono = formData.get('telefono');
    let mensaje = formData.get('mensaje');
    let nombreEmpresa = formData.get('nombre-empresa');

    let post =  {
        nombre,
        correo,
        telefono,
        mensaje,
        nombreEmpresa,
    };

    let jsonPost = JSON.stringify(post);

    const response = await fetch(
        `/portafolio`, {
            method: 'POST',
            body: jsonPost,
            headers: {
                "content-type" : "application/json"
            }
        }
    )

    const json = await response.json()

    const success = json['success']

    console.log(success);
    
    if (success) {
        form.reset()
        
        listLabel.forEach( (label) => {
            
            label.classList.remove("active")
        })

        injectPopup()
    }
}


formDesktop.addEventListener('submit', function(e) {

    e.preventDefault()

    processData(formDesktop)
})


formMovil.addEventListener('submit', function(e) {

    e.preventDefault()

    processData(formMovil)
})


new Splide('.splide', {
    perPage: 2,
    autoHeight: true,
    autoWidth: true,
    arrows: false,
    padding: {
        left: '8vw',
        right: '4vw'
    },
}).mount();

new Splide('#Proyectos-2', {
    // perPage: 2,
    autoHeight: true,
    autoWidth: true,
    arrows: false,
    padding: {
        left: '5vw',
        right: '5vw'
    },
}).mount();