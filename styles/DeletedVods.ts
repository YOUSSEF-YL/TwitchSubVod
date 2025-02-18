import styled from 'styled-components';
import { appearFromBottom } from '@/utils/animations/appearFromBottom';
import { appearFromTop } from '@/utils/animations/appearFromTop';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 2rem;
`;

export const AnimationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  animation: ${appearFromBottom} 0.5s;

  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .input-box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: var(--light-background);
    height: 2rem;
    max-width: 20rem;
    padding: 0.5rem;
    margin-bottom: 0.5rem;

    input {
      flex: 1;
      background: var(--light-background);
      color: var(--text);
      text-align: center;
      appearance: textfield;
    }
  }

  button[type='submit'] {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--purple);
    height: 2rem;
    width: 20rem;
    border: 2px solid var(--purple);
    color: var(--button-text);

    & svg {
      margin-right: 0.5rem;
    }
  }

  h1 {
    margin-bottom: 0;
  }

  .video-container {
    max-width: 60rem;
    margin: 2rem 0;

    animation: ${appearFromTop} 0.5s ease-out;
  }

  div:nth-child(3) {
    display: flex;
    justify-content: center;
  }
`;
