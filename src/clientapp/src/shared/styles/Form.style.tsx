import styled from 'styled-components';

const RadioOrCheckbox = (group: StyledFormGroup): boolean => {
  return group.type === 'radio' || group.type === 'checkbox';
};

interface StyledFormGroup {
  type?: string;
}

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div<StyledFormGroup>`
  display: flex;
  flex-direction: ${(props) => (RadioOrCheckbox(props) ? '' : 'column')};

  &:not(:last-of-type) {
    margin-bottom: 1em;
  }

  ${(props) =>
    RadioOrCheckbox(props)
      ? `${FormLabel}:not(:last-of-type) { margin-right: 1em}`
      : ''}

  ${(props) =>
    RadioOrCheckbox(props) ? `${FormLabel} { font-weight: 400 }` : ''}
`;

export const FormLabel = styled.label`
  font-weight: 500;
  margin-bottom: 0.25em;
  font-size: 0.9em;
`;

export const FormControl = styled.input`
  border: 1px solid var(--color-gray-200);
  border-radius: 6px;
  color: var(--color-gray-400);
  font-size: 1em;
  font-weight: 500;
  line-height: 2.8;
  text-indent: 0.25em;
  transition: box-shadow 0.1s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 18px -4px var(--color-primary);
  }
`;

export const FormActions = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  margin: 1em 0;
`;

export const FormRadioGroup = styled(FormGroup)``;
