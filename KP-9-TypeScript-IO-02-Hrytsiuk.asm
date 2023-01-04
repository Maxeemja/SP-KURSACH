.386
.model flat, stdcall
option casemap: none

include /masm32/include/user32.inc
include /masm32/include/kernel32.inc
include /masm32/macros/macros.asm
uselib masm32, comctl32, ws2_32

.data
.code

func proc
        push ebp
        mov ebp, esp

        push [ebp+8]

        push [ebp-4]
        pop eax
        push eax

        _if0:
        push [ebp-4]
        push 1
        push [ebp-4]
        push 0
        
        pop ebx
        pop eax
        cmp eax, ebx
        jg _elif0

        pop ebx
        pop eax
        cmp eax, ebx
        je _if0

        jmp _exit

        _elif0:
        push [ebp-4]
        push 1

        pop eax
        pop ebx
        sub eax, ebx
        push eax
        
        jmp _exit
        _for0:
        push 1
        pop eax
        mov [ebp-8], eax

        pop eax
        mov [ebp-4], eax

        push [ebp-8]
        push [ebp-4]

        pop eax
        push eax


        push edi

        pop eax
        mov [ebp-8], eax


        _exit:

        push [ebp-8]
        pop eax
        mov eax, 2880
        mov edi, eax

        mov esp, ebp
        pop ebp

        ret 4
func endp


main proc
        mov eax, edi
    invoke MessageBox, 0, str$(eax), chr$("Result"), 0
        ret
main endp

start:
        push 2

        call func

        invoke main
        invoke ExitProcess, 0
end start

Exit