import React from 'react';
// import Avatar from '@material-ui/core/Avatar';

import {Typography, Avatar, Tooltip} from '@material-ui/core';

const Imagen =({ alt,source })=>pug`
Tooltip(title=alt)
  Avatar.mx-3(style={width:90 , height:90  }, alt=alt, src=source )`


const About = props => {

  return pug`
    .container-fluid
      .text-center
        i.material-icons(style={fontSize: 90 }) info
      .text-center
        h1 Acerca de esta aplicación
        .text-center.my-5
        Typography( variant="subtitle1").
          Aplicación creada como scafold inicial para Pedro Pablo. 
          Crud básico que permite Crear, Editar, Leer y Eliminar tareas, trasfiriendolas en un Storage de  Estado en memoria construido con RecoilJS.
        .texnt-center.my-5.row.justify-content-center
          Imagen( alt="React" source="/images/react.png" )
          Imagen( alt="Recoil" source="/images/recoil.jpg" )

        Typography( variant="subtitle1").
          Escrito en React odos los componentes son funcionales utilizando Hooks. 
          Se usa MaterialUI para el Frontend básico de la aplicacíon, ReactRouter para management de vistas, y el grid de bootstrap con su variante material.
        .text-center.my-5
          .row.justify-content-center
            Imagen(alt="Material UI" source="/images/material.png" )
            Imagen( alt="React Router" source="/images/router.png" )   

        Typography( variant="subtitle1").
          Como Herramientas de desarollo, se utiliza Pug como motor de templates.
          Y config overrides para configurar Webpack
        .text-center.my-5
          .row.justify-content-center
            Imagen( alt="Webpack" source="/images/webpack.png" )
            Imagen( alt="Pug/Jade" source="/images/pug.png" )
        Typography( variant="subtitle1").
          El uso es similar al de VueJS, pero habiendo experimentado ambos, Vue me resulta mas elegante y robusto para hacer dedarrollo.
        Typography.m-5( variant="subtitle2").
          Caracas, Venezuela 🇻🇪 26 de Julio de 2020

  `
}
export default About;