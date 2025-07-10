"use client"

import { useState, useEffect } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle } from "lucide-react"

interface EmailModalProps {
  isOpen: boolean
  onClose: () => void
  version: "A" | "B"
}

export function EmailModal({ isOpen, onClose, version }: EmailModalProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSend9m3p8kIgsthIsHYlfYwBTJgwHP9PMxnQo0UqNka-Wnx_Q/formResponse"
  const GOOGLE_FORM_EMAIL_FIELD = "emailAddress" // 새로운 Google Forms는 이 형식을 사용

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Google Analytics event tracking
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "generate_lead", {
          value: 1,
          currency: "KRW",
          version: version,
        })
      }

      // Google Forms 전송
      const formData = new FormData()
      formData.append(GOOGLE_FORM_EMAIL_FIELD, email)
      
      // iframe을 사용한 전송 방식 (더 안정적)
      const iframe = document.createElement('iframe')
      iframe.style.display = 'none'
      iframe.name = 'google-form-iframe'
      document.body.appendChild(iframe)
      
      const form = document.createElement('form')
      form.method = 'POST'
      form.action = GOOGLE_FORM_ACTION_URL
      form.target = 'google-form-iframe'
      
      const emailInput = document.createElement('input')
      emailInput.type = 'hidden'
      emailInput.name = GOOGLE_FORM_EMAIL_FIELD
      emailInput.value = email
      
      form.appendChild(emailInput)
      document.body.appendChild(form)
      
      form.submit()
      
      // 정리
      setTimeout(() => {
        document.body.removeChild(form)
        document.body.removeChild(iframe)
      }, 2000)
      
      setIsSubmitted(true)
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const openKakaoChat = () => {
    window.open('https://open.kakao.com/o/gsfO5bGh', '_blank')
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg" aria-describedby="dialog-description">
        {!isSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center mb-4">
                납품업체 리뷰 서비스가 곧 오픈합니다.
              </DialogTitle>
            </DialogHeader>
            <div className="mt-2" id="dialog-description">
              <div className="bg-blue-50 rounded-lg p-4 mb-6 text-center">
                <p className="text-gray-700 font-medium">
                  얼리버드 가입자님께는<br/>
                  <span className="text-blue-600 font-bold">첫 3개월 무료 + 프리미엄 업체 추천</span>을 드려요!
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="이메일 주소를 입력하세요"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full h-12 text-base"
                  disabled={isSubmitting}
                />
                <Button 
                  type="submit" 
                  className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white text-base font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "제출 중..." : "알림 받기"}
                </Button>
              </form>
            </div>
          </>
        ) : (
          <div className="text-center py-6">
            <div className="bg-green-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold mb-3">감사합니다!</h3>
            <p className="text-gray-600 mb-6">
              곧 좋은 소식으로 찾아뵐게요.<br/>
              <span className="text-blue-600 font-medium">오픈채팅방에 참여하시면 런칭 소식을 가장 빠르게 받아보실 수 있어요!</span>
            </p>
            <Button
              onClick={openKakaoChat}
              variant="outline"
              className="w-full h-12 text-base font-medium border-yellow-400 hover:bg-yellow-50"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="#3C1E1E">
                <path d="M12 3C6.477 3 2 6.415 2 10.5c0 2.723 1.996 5.1 4.974 6.347-.164.632-.595 2.29-.683 2.65-.11.447.164.442.345.322.142-.094 2.253-1.533 3.17-2.153A11.22 11.22 0 0012 18c5.523 0 10-3.415 10-7.5S17.523 3 12 3z"/>
              </svg>
              카페 사장님 오픈채팅방 참여하기
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}