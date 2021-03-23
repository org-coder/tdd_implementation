/**
 * Validate Password.
 *
 * @param {password} check password length.
 * @returns {number} Returns boolean true/false.
 * @example
 *
 * validatePassword("ScientificPaper")
 * // => false
 * validatePassword("Scientific")
 * // => true
 */
 
const validatePassword = (password) => {
	if(password.length >= 5 && password.length <=10)
        return true;
    else
        return false;
}

export default validatePassword
