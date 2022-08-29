import './form-input.styles.scss'

const FormInput = ({label, ...otherOptions}) => {
    return(
        <div className="form-group">
          <input 
          className='form-input' 
          {...otherOptions} 
          />
          {
            label && (
                <label 
                    htmlFor="email" 
                    className={ `${otherOptions.value.length ? 'shrink' : ''} form-input-label` }>
                { label }
                </label>
            )
            
          }
          
        </div>
    )
}

export default FormInput