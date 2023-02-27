import style from './clock.module.scss'

interface Props  {
    time: number | undefined
}

export default function Clock({ time = 0 }: Props) {
    
    // Separa os minutos
    const minutes = Math.floor(time/60);
    // Separa os segundos
    const seconds = time % 60;

    // Separa os minutos em dezena e unidade colocando um valor padrão de inicio como 0
    const [minuteTen, minuteUnity] = String(minutes).padStart(2, '0');
    // Separa os segundos em dezena e unidade colocando um valor padrão de inicio como 0
    const [secondTen, secondUnity] = String(seconds).padStart(2, '0');
    
    return (
        <>
            <span className={style.relogioNumero}>{minuteTen}</span>
            <span className={style.relogioNumero}>{minuteUnity}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{secondTen}</span>
            <span className={style.relogioNumero}>{secondUnity}</span>
        </>
    );
}