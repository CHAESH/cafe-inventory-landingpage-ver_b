"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Star, BarChart3, MapPin, Package, Clock, Shield } from "lucide-react"
import { EmailModal } from "@/components/email-modal"

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2">
            <Building2 className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">카페서플라이</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 px-4 text-center bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto max-w-4xl">
          <Badge className="mb-4 sm:mb-6 bg-blue-100 text-blue-800 text-sm sm:text-base px-3 sm:px-4 py-1.5 sm:py-2">
            <Clock className="mr-1.5 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            2025년 8월 출시 예정
          </Badge>
          
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-snug">
            카페 사장님들이 기다리는<br />
            <span className="text-blue-600">납품업체 리뷰 플랫폼</span>
          </h1>
          
          <p className="text-base sm:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
            실제 카페 사장님들의 솔직한 리뷰로<br className="sm:hidden" />
            믿을 수 있는 납품업체를 찾아보세요
          </p>
          
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-6 shadow-lg hover:shadow-xl transition-all w-full sm:w-auto max-w-sm mx-auto"
            onClick={() => setIsModalOpen(true)}
          >
            출시 알림 신청하기
          </Button>

          {/* Trust indicators */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm sm:text-base text-gray-600">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
              <span>300명+ 사전신청</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 fill-current" />
              <span>카페 사장님 추천</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
              <span>월 50만원 절감 가능</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-10 sm:py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-12 text-center leading-snug">
            납품업체 선택,<br className="sm:hidden" />
            아직도 이렇게<br className="sm:hidden" />
            하시나요?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <Card className="p-5 sm:p-8 bg-white border-2 hover:border-red-300 transition-all hover:shadow-md">
              <CardContent className="p-0 text-center">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔍</div>
                <h3 className="text-base sm:text-xl font-bold mb-2 text-gray-900">정보 찾기 어려움</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  "네이버 검색해도<br/>광고만 가득..."
                </p>
              </CardContent>
            </Card>

            <Card className="p-5 sm:p-8 bg-white border-2 hover:border-red-300 transition-all hover:shadow-md">
              <CardContent className="p-0 text-center">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">😰</div>
                <h3 className="text-base sm:text-xl font-bold mb-2 text-gray-900">가격 비교 불가</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  "이 가격이<br/>적정한건지..."
                </p>
              </CardContent>
            </Card>

            <Card className="p-5 sm:p-8 bg-white border-2 hover:border-red-300 transition-all hover:shadow-md">
              <CardContent className="p-0 text-center">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">⏰</div>
                <h3 className="text-base sm:text-xl font-bold mb-2 text-gray-900">시간 낭비</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  "일일이 전화해서<br/>물어봐야 해요"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">
            카페서플라이가 준비하고 있어요
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12 text-center">
            카페 사장님들이 정말 필요로 하는 기능만 담았습니다
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-5 sm:p-6 rounded-full mb-3 sm:mb-4 w-20 h-20 sm:w-24 sm:h-24 mx-auto flex items-center justify-center">
                <Star className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">실제 후기만</h3>
              <p className="text-sm sm:text-base text-gray-600">
                사장님들이 직접 작성한<br/>
                솔직한 업체 평가
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 p-5 sm:p-6 rounded-full mb-3 sm:mb-4 w-20 h-20 sm:w-24 sm:h-24 mx-auto flex items-center justify-center">
                <Package className="h-10 w-10 sm:h-12 sm:w-12 text-green-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">견적 비교</h3>
              <p className="text-sm sm:text-base text-gray-600">
                여러 업체 견적을<br/>
                한 번에 비교 가능
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 p-5 sm:p-6 rounded-full mb-3 sm:mb-4 w-20 h-20 sm:w-24 sm:h-24 mx-auto flex items-center justify-center">
                <MapPin className="h-10 w-10 sm:h-12 sm:w-12 text-orange-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">지역별 추천</h3>
              <p className="text-sm sm:text-base text-gray-600">
                우리 동네 배송 가능한<br/>
                업체만 추천
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto max-w-2xl text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
            지금 바로 원가 절감 시작하세요
          </h2>
          
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 text-base sm:text-lg px-8 sm:px-10 py-5 sm:py-6 shadow-lg hover:shadow-xl transition-all"
            onClick={() => setIsModalOpen(true)}
          >
            무료로 시작하기
          </Button>

          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-white/80">
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              <span>3분 만에 가입</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Shield className="h-4 w-4" />
              <span>안전한 거래</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <Building2 className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
            <span className="text-base sm:text-lg font-bold">카페서플라이</span>
          </div>
          <p className="text-xs sm:text-sm text-gray-400">
            © 2025 카페서플라이. 카페 사장님을 위한 납품업체 리뷰 플랫폼
          </p>
        </div>
      </footer>

      {/* Email Modal */}
      <EmailModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        version="B"
      />
    </div>
  )
}