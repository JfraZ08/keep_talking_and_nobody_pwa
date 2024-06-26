import { useMemo, useState } from "react";
import '../App.scss'

const COLORS = ["red", "blue", "yellow", "white", "black"]
export default function FilView() {
    const [fils, setFils] = useState(["red", "blue", "yellow"])
    const [serialEndIsPair, setSerialEndIsPair] = useState(false)

    const res = useMemo(() => {
        const nbRed = fils.filter(fil => fil === "red").length
        const nbBlue = fils.filter(fil => fil === "blue").length
        const nbYellow = fils.filter(fil => fil === "yellow").length
        const nbBlack = fils.filter(fil => fil === "black").length
        const nbWhite = fils.filter(fil => fil === "white").length

        if(fils.length === 3) {
            if(nbRed === 0) {
                return "Couper le 2ème fil"
            }
            if(fils[fils.length - 1] === "white") {
                return "Couper le dernier fil"
            }
            if(nbBlue > 1) {
                return "Couper le dernier fil bleu"
            }
            return "Couper le dernier fil"
        }
        else if(fils.length === 4) {
            if(nbRed > 1 && serialEndIsPair) {
                return "Couper le dernier fil rouge"
            }
            if(fils[fils.length - 1] === "yellow" && nbRed === 0) {
                return "Couper le 1er fil"
            }
            if(nbBlue === 1) {
                return "Couper le 1er fil"
            }
            if(nbYellow > 1) {
                return "Couper le dernier fil"
            }
            return "Couper le 2ème fil"
        }
        else if(fils.length === 5) {
            if(fils[fils.length - 1] === "black" && !serialEndIsPair) {
                return "Couper le 4ème fil"
            }
            if(nbRed === 1 && nbYellow > 1) {
                return "Couper le 1er fil"
            }
            if(nbBlack === 0) {
                return "Couper le 2ème fil"
            }
            return "Couper le 1er fil"
        }
        else {
            if(nbYellow === 0 && !serialEndIsPair) {
                return "Couper le 3ème fil"
            }
            else if(nbYellow === 1 && nbWhite > 1) {
                return "Couper le 4ème fil"
            }
            else if(nbRed === 0) {
                return "Couper le dernier fil"
            }
            else {
                return "Couper le 4ème fil"
            }
        }

    }, [fils])


    const handleChangeFils = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newNbFils = parseInt(event.target.value)
        if(newNbFils >= 3 && newNbFils <= 6) {
            setFils(new Array(newNbFils).fill("red"))
        } 
    }

    const handleChangeFilColor = (index: number, color: string) => {
        const newFils = [...fils]
        newFils[index] = color
        setFils(newFils)
    }

    return (
        <>
        <div className="string-game">
            <h1>String Game</h1>
            <div className="sous">
                <label htmlFor="nb-fils">Nb Fils</label>
                <input 
                    type="number" 
                    min={3} 
                    max={6} 
                    value={fils.length} 
                    onChange={handleChangeFils}
                    className="" 
                />
            </div>
            <label htmlFor="is-pair"> dernier numéro de série est pair</label>
            <input 
                type="checkbox" 
                checked={serialEndIsPair} 
                onChange={() => setSerialEndIsPair(!serialEndIsPair)}
            />

            <div className="wires">
                {fils.map((fil, index) => (
                    <div className="fil-line" key={index}>
                        <div key={index} className={`wire ${fil}`} style={{backgroundColor: fil, }}></div>
                        <select onChange={(e) => handleChangeFilColor(index, e.target.value)} value={fil}>
                            {COLORS.map((color, colorIndex) => (
                                <option key={index + "-" + colorIndex} value={color}>{color}</option>
                            ))}
                        </select>
                    </div>
                ))}
            </div>

            <div className="res">
                {res}
            </div>
        </div>
        </>
    )
}