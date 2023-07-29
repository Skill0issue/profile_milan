import React from 'react';

const Calander = () => {
  return (
    <div className='text-xl '>
      <h1>Calender</h1>
      <section className='container mx-auto'>
          <div className="container flex justify-between text-3xl font-bold border-2 border-gray-600 font-archivo ">
            <div className='ml-4'>September</div>
            <div className='mr-4'>2023</div>
          </div>
          <div>
            <div className="grid grid-cols-7 my-4 border-2 border-gray-400 grid-gap-4 " >
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div><button>1</button></div>
              <div><button>2</button></div>
              <div><button>3</button></div>
              <div><button>4</button></div>
              <div><button>5</button></div>
              <div><button>6</button></div>
              <div><button>7</button></div>
              <div><button>8</button></div>
              <div><button>9</button></div>
              <div><button>10</button></div>
              <div><button>11</button></div>
              <div><button>12</button></div>
              <div><button>13</button></div>
              <div><button>14</button></div>
              <div><button>15</button></div>
              <div><button>16</button></div>
              <div><button>17</button></div>
              <div><button>18</button></div>
              <div><button>19</button></div>
              <div><button>20</button></div>
              <div><button>21</button></div>
              <div><button>22</button></div>
              <div><button>23</button></div>
              <div><button>24</button></div>
              <div><button>25</button></div>
              <div><button>26</button></div>
              <div><button>27</button></div>
              <div><button>28</button></div>
              <div><button>29</button></div>
              <div><button>30</button></div>
            </div>
          </div>
      </section>
    </div>
  )
}

export default Calander
