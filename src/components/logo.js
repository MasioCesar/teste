import { styled } from '@mui/material/styles';

export const Logo = styled((props) => {
  const { variant, ...other } = props;

  return (
    <svg height="40.02" width="124.032" viewBox="0 0 1280 413" xmlns="http://www.w3.org/2000/svg">
	    <image height="203" id="Camada_0" width="812" x="8" y="113" xlinkHref="data:img/png;base64,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" data-name="Camada 0"/>
	    <image height="125" id="Camada_1" width="93" x="1003" y="143" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAMCAYAAACwXJejAAABx0lEQVQYlQG8AUP+AdJkbGLznJudDV5jX5tmDfzK38CQMQ8vkg8GD+LM7MuDDQINxwT1t7JrEQD5AAO6vFvGLgfpzffTFe4L6jgXChcUxOPIHgcJBg0EG2Fpg/uElI8GVFaSSkAJBBPgGTEzDjC0BQAG/gIJAvkNAw7IBIlI7wnjLC/pJyEEBw/5APgXBRLp8PjwEywQLoWWT5qa6/HpAASwy6Vc5QHlNybt3VkJ+wPs0fPWQwwBCCEuCTCFExATABkOGQAERBpCxdry2zQzFzLFBwIG8A3nD0wTCRS6PxpAACIKJQD6+/oABBMJEusR+BLdFAsV6wkDBvIPAw/dLBQsywoMCUyW0ZF1AwEFzAS24LVQ2fbcOefz4+QFAQTsy/TPP+n45/MP5A/dvenCPhMGDi0EKhMryv8E/DstFy7LCAMI7/Dm7uorFSzCBwMJA9f02AAZBxnkBBoNGtbs+um2HQ8b2QgDCfMY7xm5EwwV8wj8CZgWAxSKGggaAwP9PfyK1/TXUvn2+QPj7uIh0/PUY+bw5SkD+QWSAwQD//0A/P4EDgYO7wj5BwAOBw/sBgIG7Qf1BgANBQ7rEQkRABAADwD8APsA3a2wFH2VAFAAAAAASUVORK5CYII=" data-name="Camada 1"/>
	    <image height="412" id="Camada_2" width="460" x="820" xlinkHref="data:img/png;base64,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" data-name="Camada 2"/>
    </svg>
  );
})``;