const StateValidator = degree => {
    return ((degree > 3) || (degree < 0) ? 0 : degree);
}

export default StateValidator;