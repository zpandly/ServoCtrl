enum TrashBinType {
    //% block="可回收物桶"
    Recycle = 0,
    //% block="厨余垃圾桶"
    Kitchen = 1,
    //% block="其他垃圾桶"
    Others = 2,
    //% block="有害垃圾桶"
    Harmful = 3
}

namespace ServoCtrl {
    
    //% blockId="ServoCtrl_ServoOpen" block="打开%tbType"
   export function ServoOpen(tbType: TrashBinType) {
        switch (tbType)
        {
            case TrashBinType.Recycle:
                servos.P0.setPulse(2000);
                break;
            case TrashBinType.Kitchen:
                servos.P1.setPulse(2000);
                break;
            case TrashBinType.Others:
                servos.P2.setPulse(2000);
                break;
            case TrashBinType.Harmful:
                break;
            default: 
                break;
        }
    }

    //% blockId="ServoCtrl_ServoClose" block="关闭%tbType"
   export function ServoClose(tbType: TrashBinType) {
       switch (tbType) {
           case TrashBinType.Recycle:
               servos.P0.setPulse(900);
               break;
           case TrashBinType.Kitchen:
               servos.P1.setPulse(900);
               break;
           case TrashBinType.Others:
               servos.P2.setPulse(900);
               break;
           case TrashBinType.Harmful:
               break;
           default:
               break;
       }
   }
}