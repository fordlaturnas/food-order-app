import classes from './Input.module.css';

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} /> {/** kung lahat ng props matik na malalagay */}
    </div>
  );
};

export default Input;
