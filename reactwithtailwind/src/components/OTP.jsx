import { useRef, forwardRef, useState } from "react";
import { Button } from "./button";
 
export function OTP() {

  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();

  const [disabled,setDisabled] = useState(true);

  return (
    <div>
      <div className="flex gap-4 justify-center">

        <SubOtpBox
          ref={ref1}
          onDone={() => {
            ref2.current.focus();
          }}
        />

        <SubOtpBox
          ref={ref2}
          onDone={() => {
            ref3.current.focus();
          }}onBack = {() => {
            ref1.current.focus();
          }}
        />

        <SubOtpBox
          ref={ref3}
          onDone={() => {
            ref4.current.focus();
          }}onBack = {() => {
            ref2.current.focus();
          }}
        />

        <SubOtpBox
          ref={ref4}
          onDone={() => {
            ref5.current.focus();
          }}onBack = {() => {
            ref3.current.focus();
          }}
        />

        <SubOtpBox
          ref={ref5}
          onDone={() => {
            ref6.current.focus();
          }}onBack = {() => {
            ref4.current.focus();
          }}
        />

        <SubOtpBox
          ref={ref6}
          onDone={() => {
            setDisabled(false);
          }}onBack = {() => {
            ref5.current.focus();
          }}
        />

        <br/>
        <br/>

         <Button disabled={disabled}> Signup </Button>
      </div>
    </div>
  );
}

const SubOtpBox = forwardRef(({ onDone, onBack }, ref) => {

    const [inputBoxVal, setInputBoxVal] = useState("");

    return (
    <div>
      <input
        value={inputBoxVal}
        ref={ref}
        onChange={(e) => {

          const val = e.target.value;

          if(val == ""){
            setInputBoxVal("");
            onBack?.();

          } else if(
            val == "1" || val == "2" || val == "3" || val == "4"
            || val == "5" || val == "6" || val == "7"
            || val == "8" || val == "9" || val == "0"
          ){

            setInputBoxVal(val);
            onDone();

          } else {

          }

        }}

        type="text"
        maxLength="1"
        className="w-[40px] h-[50px] rounded-2xl bg-white text-black text-center text-xl outline-none"
      />
    </div>
  );
});