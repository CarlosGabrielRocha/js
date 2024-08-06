const devs = []
let devsUpdate

const button = document.querySelector('button[name = "add-tecnology"]')

button.addEventListener('click', addtecnology)

function addtecnology(event) {
    event.preventDefault()

    const form = event.currentTarget.parentNode
    const div = document.createElement('div')

    // Nome da tecnologia

    const tecnologyName = document.createElement('input')
    tecnologyName.type = 'text'
    tecnologyName.name = 'tecnologyName'
    tecnologyName.id = 'tecnologyName'
    const tecnologyLabel = document.createElement('label')
    tecnologyLabel.innerText = 'Nome da tecnologia: '
    tecnologyLabel.htmlFor = 'tecnologyName'

    // Tempo de experiência

    const fieldset = document.createElement('fieldset')
    const legend = document.createElement('legend')
    legend.innerText = 'Tempo de experiência'

    const experienceTime0_2 = document.createElement('input')
    experienceTime0_2.checked = true
    const experienceTime3_4 = document.createElement('input')
    const experienceTime5 = document.createElement('input')

    experienceTime0_2.type = 'radio'
    experienceTime3_4.type = 'radio'
    experienceTime5.type = 'radio'

    experienceTime0_2.value = '0-2 anos'
    experienceTime3_4.value = '3-4 anos'
    experienceTime5.value = 'mais de 5 anos'

    experienceTime0_2.name = 'experience'
    experienceTime3_4.name = 'experience'
    experienceTime5.name = 'experience'

    experienceTime0_2.id = 'experience02'
    experienceTime3_4.id = 'experience34'
    experienceTime5.id = 'experience5'

    const experience02Label = document.createElement('label')
    const experience34Label = document.createElement('label')
    const experience5Label = document.createElement('label')

    experience02Label.innerText = ' 0-2 anos '
    experience34Label.innerText = ' 3-4 anos '
    experience5Label.innerText = ' 5+ anos '

    experience02Label.htmlFor = 'experience02'
    experience34Label.htmlFor = 'experience34'
    experience5Label.htmlFor = 'experience5'

    fieldset.append(
        legend,
        experienceTime0_2,
        experience02Label,
        experienceTime3_4,
        experience34Label,
        experienceTime5,
        experience5Label
    )

    // Remover linha

    const removeLine = document.createElement('button')
    removeLine.id = 'remove'
    removeLine.innerText = 'Remover'

    // Cadastrar

    const register = document.createElement('button')
    register.type = 'submit'
    register.innerText = 'Cadastrar'

    // Mostrar elementos

    div.append(
        document.createElement('hr'),
        tecnologyLabel,
        tecnologyName,
        document.createElement('br'),
        fieldset,
        document.createElement('br'),
        removeLine,
        register
    )

    form.appendChild(div)

    register.addEventListener('click', registerDev)
    removeLine.addEventListener('click', remove)
}

function registerDev(event) {
    event.preventDefault()
    let filled = false
    let confirmation = false
    const div = event.currentTarget.parentNode

    const devName = document.querySelector('input[name = "name"]').value
    const tecnologyName = div.querySelector('input[name = "tecnologyName"]').value
    const experienceTime = div.querySelector('input[name = "experience"]:checked').value

    if(devName == '' || tecnologyName == '') {
        alert('Todos os campos precisam estar preenchidos!')
    } else {
        filled = true
        confirmation = confirm(`Você confirma as informações a serem adicionadas?\nNome do desenvolvedor: ${devName}\nTecnologia: ${tecnologyName}\nTempo de experiência em ${tecnologyName}: ${experienceTime}`)
    }

    if (confirmation && filled) {
        devs.push({
            'nome': devName,
            'tecnologia': tecnologyName,
            'experiencia': experienceTime
        })

        devsUpdate = devs.reduce(function(acumulate, element) {
            if(acumulate[element.nome]) {
                acumulate[element.nome].push(element)
            } else {
                acumulate[element.nome] = [element]
            }

            return acumulate
        }, {})

        div.remove()
        alert('Informações adicionadas com sucesso!')
    }

    console.log(devsUpdate)
}

function remove(event) {
    event.preventDefault()

    const div = event.currentTarget.parentNode
    div.remove()
}