declare module ol.binary {
    class Buffer extends Buffer.__Class { }
    module Buffer {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * @constructor
             * @param {ArrayBuffer|string} data Data.
             */
            constructor(data: ArrayBuffer);
            /**
             * @constructor
             * @param {ArrayBuffer|string} data Data.
             */
            constructor(data: string);
    
            /**
             * @return {ol.binary.IReader} Reader.
             */
            getReader(): IReader;
        }
    }

    interface IReader {
    
        /**
          * @return {boolean} At EOF.
          */
        atEOF(): boolean;
    
        /**
          * @return {number} Byte.
          */
        readByte(): number;
    }

    class ArrayBufferReader extends ArrayBufferReader.__Class { }
    module ArrayBufferReader {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class implements IReader {
    
            /**
             * @constructor
             * @param {ArrayBuffer} arrayBuffer Array buffer.
             * @implements {ol.binary.IReader}
             */
            constructor(arrayBuffer: ArrayBuffer);
    
            /**
             * @return {boolean} At EOF.
             */
            atEOF(): boolean;
    
            /**
             * @return {number} Byte.
             */
            readByte(): number;
        }
    }

    class ArrayReader extends ArrayReader.__Class { }
    module ArrayReader {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class implements IReader {
    
            /**
             * @constructor
             * @implements {ol.binary.IReader}
             * @param {Array.<number>} array Array.
             */
            constructor(array: number[]);
    
            /**
             * @return {boolean} At EOF.
             */
            atEOF(): boolean;
    
            /**
             * @return {number} Byte.
             */
            readByte(): number;
        }
    }
}
