/**
 * Recebe um tempo padrão de HH:MM:SS e converte em segundos
 * @param time tempo para conversão
 * @returns o tempo total em segundos
*/
export function timeToSeconds(time: string): number {
    const [hours = '0', minutes = '0', seconds = '0'] = time.split(':');

    const hoursInSeconds: number = Number(hours) * 3600;
    const minutesInSeconds: number = Number(minutes) * 60;
    return hoursInSeconds + minutesInSeconds + Number(seconds);
}