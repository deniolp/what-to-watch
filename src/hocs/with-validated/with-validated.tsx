import * as React from 'react';

const withValidated = ((Component: React.SFC): React.SFC => {
  const WithValidated = (props): React.SFC => {
    const [isRadioPressed, setIsRadioPressed] = React.useState(false);
    const [isValidated, setIsValidated] = React.useState(false);

    const handleRadioClick = (): void => {
      setIsRadioPressed(true);
    };

    const handleTextareaChange = (evt): void => {
      evt.preventDefault();

      if (evt.target.value.length >= 50 && evt.target.value.length <= 400) {
        if (isRadioPressed) {
          setIsValidated(true);
        }
      } else {
        setIsValidated(false);
      }
    };

    return <Component
      {...props}
      isValidated={isValidated}
      onRadioClick={handleRadioClick}
      onTextareaChange={handleTextareaChange}
    />;
  };

  WithValidated.propTypes = {};

  return WithValidated;
});

export default withValidated;
