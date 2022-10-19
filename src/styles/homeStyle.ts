const grid = {
  Theme: {
    fontFamily: 'Comfortaa, cursive'
  },
  Style: {
    'gap': '0rem', 
    'color': 'black',  
    'template-columns': '1.5fr 2fr', 
    'background': 'linear-gradient(30deg, rgba(242,242,242,1) 15%, rgba(238,238,238,1) 36%, rgba(230,230,230,1) 63%, rgba(217,217,217,1) 85%)'
  }
};

const gridItem1 = {
  Style: {
    'padding': '0.8rem', 
    'display': 'flex',  
  },
  Theme: {
    colSpan: 2
  }
};

const gridItem2 = {
  paddingLeft: '0.8rem', 
  colSpan: 2
};

const input = {
  type: 'text',
};

const button = {
  Theme: {
    colorScheme: 'blue',
    size: 'md',
    boxShadow: 'base'
  },
  Style: {
    'color': 'white',
    'height': '1.75rem'
  }
};

const heading = {
  fontFamily: 'Comfortaa, cursive',
  size: 'xl'
}

export { grid, gridItem1, gridItem2, input, button, heading };