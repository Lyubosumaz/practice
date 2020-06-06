export default function randomNumberGen() {
    return Math.random().toString().substr(2, 6);
}