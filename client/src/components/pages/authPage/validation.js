const REQUIRED_FIELD = 'Обязательно для заполнения'

export const loginValidation = {
    required: REQUIRED_FIELD,
    validate: (value) => {


        if(value.match(/[а-яА-Я]/)) {
            return 'Логин не может содержать кириллицу'
        }
        if (!value.includes('@')) {
            return 'Некорректный email'
        }
        return true;

        
    }
}

export const passwordValidation = {
    required: REQUIRED_FIELD,
    validate: (value) => {
    
        if (value.length < 6) {
            return 'Пароль должен быть длинее 6-ти символов'
        }
        return true;
    }

}

