import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент

                color: '#52af77',
                height: 8,
                width: 150,
                '& .MuiSlider-track': {
                border: 'none',
            },
                '& .MuiSlider-thumb': {
                height: 18,
                width: 18,
                backgroundColor: '#fff',
                border: '1px solid currentColor',

            },

            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
