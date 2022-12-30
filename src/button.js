import { mergeTheme, defaultTheme } from 'evergreen-ui'

    export const headit_theme_button = mergeTheme(defaultTheme, {
      components: {
        Button: {
          appearances: {
            Headitblue_button: {
              color: 'white',
              paddingX: 12,
              paddingY: 8,
              borderRadius: 5,
              backgroundColor: '#00519E',
              _hover: {
                backgroundColor: '#0084ff',
              },
              _active: {
                backgroundColor: '#00519E',
              },
              _focus: {
                boxShadow: '0 0 0 2px #000000',
              },
            },
          },
        },
      },
    })

