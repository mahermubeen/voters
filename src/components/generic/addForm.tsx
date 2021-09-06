var Component = React.Component;
var createStore = Redux.createStore;
var combineReducers = Redux.combineReducers;
var formReducer = ReduxForm.reducer;
var reduxForm = ReduxForm.reduxForm;
var Field = ReduxForm.Field;
var FieldArray = ReduxForm.FieldArray;
var render = ReactDOM.render;
var Provider = ReactRedux.Provider;
var connect = ReactRedux.connect;

// Reducer and store setup
var reducer = combineReducers({
  form: formReducer,
});
var store = createStore(reducer);

function renderFormField({ input, label, type, meta: { touched, error } }) {
  if (type === "select") {
    return (
      <div className="form-field">
        <label htmlFor={input.id}>{label}</label>
        <select {...input}>
          <option value="text">Text</option>
          <option value="number">Number</option>
          <option value="boolean">True/False</option>
        </select>
      </div>
    );
  }

  return (
    <div>
      <label htlmFor={input.id}>{label}</label>
      <div>
        <input {...input} type={type} placeholder={label} />
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  );
}

function renderFormItem(item, index, fields) {
  function handleClick() {
    fields.remove(index);
  }

  return (
    <li className="form-item" key={index}>
      <Field
        component={renderFormField}
        label="Name:"
        name={item.toString() + ".name"}
        type="text"
      />
      <Field
        component={renderFormField}
        label="Type:"
        name={item.toString() + ".type"}
        type="select"
      />
      <button className="btn" onClick={handleClick} type="button">
        <span aria-hidden="true" className="material-icons">
          remove
        </span>
        Remove
      </button>
    </li>
  );
}

function renderFormItems(props) {
  var fields = props.fields;
  function addItem() {
    fields.push({});
  }

  return (
    <div>
      <ul className="form-items">{fields.map(renderFormItem)}</ul>
      <button className="btn" onClick={addItem} type="submit">
        <span aria-hidden="true" className="material-icons">
          add
        </span>
        Add Item
      </button>
    </div>
  );
}

function renderForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={renderFormModeSwitcher} name="formMode" />
      <FieldArray component={renderFormItems} name="items" />
      <button className="btn" type="submit">
        <span aria-hidden="true" className="material-icons">
          save
        </span>
        Save
      </button>
      <button className="btn" onClick={props.reset} type="reset">
        <span aria-hidden="true" className="material-icons">
          clear
        </span>
        Cancel
      </button>
    </form>
  );
}

var DecoratedForm = reduxForm({
  form: "dynamic-redux-form",
  initialValues: {
    formMode: "fancy",
    items: [{}],
  },
})(renderForm);

class App extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  submit(values) {
    console.log(values);
  }
  render() {
    return <DecoratedForm onSubmit={this.submit} />;
  }
}

var ConnectedApp = connect()(App);

// Mount application
render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById("app")
);
