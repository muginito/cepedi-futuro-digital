# Atividade Z-Index e Position

Esta atividade tem como objetivo praticar o uso das propriedades `z-index` e `position` em CSS
para controlar a sobreposição e o posicionamento de elementos em uma página web.

## Regras da atividade

1. Você deve usar 3 elementos principais.
2. Cada elemento deve usar um tipo de position (relative absolute, fixed/sticky).
3. Defina níveis de profundidade com z-index.
4. Os elementos precisam estar sobrepostos.

## O que usei

Fiz o design de um pato usando HTML e CSS, aplicando position em diversos elementos como nos bicos, em que utilizei position **absolute** para posicioná-los corretamente e tirei vantagem de multi-classes para aplicar estilos comuns. 

```css

pato--bico {
  position: absolute;
  border-radius: 50%;
  background-color: orange;
  transform: translate(-50%, -50%);
}

.superior {
  width: calc(var(--w-pato) * 0.3);
  height: calc(var(--h-pato) * 0.12);
  top: 57%;
  left: 50%;
}

.inferior {
  width: calc(var(--w-pato) * 0.5);
  height: calc(var(--h-pato) * 0.14);
  top: 60%;
  left: 50%;
}

```

Para o corpo do pato, ou seja a `div` principal, usei position **fixed** para que deixá-lo no canto inferior direito da tela.

Apliquei position **relative** na `.hero-section` para posicionar os elementos filhos em `.hero-content` com o absolute.

Defini a imagem de fundo como fixed e usei z-index `-1` para garantir que fique atrás do conteúdo. E com z-index `-2`, escondi uma mensagem `.segredo` atrás da imagem de fundo dentro da `.hero-section`. Ela é pouco visível pois a opacidade da imagem está em 90%. 

