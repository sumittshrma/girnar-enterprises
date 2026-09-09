// Admin.jsx - Complete with Upload Icon and Logout
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  Package,
  Users,
  ShoppingCart,
  MessageSquare,
  Settings as SettingsIcon,
  LogOut,
  Plus,
  Edit,
  Trash2,
  Search,
  AlertCircle,
  Phone,
  Mail,
  Calendar,
  DollarSign,
  Star,
  Award,
  Shield,
  Truck,
  Droplets,
  Menu,
  X,
  Bell,
  Save,
  RefreshCw,
  Send,
  MapPin,
  Upload,
} from 'lucide-react';
import { useProducts } from './ProductContext';

// --- Mock Data ---
const initialOrders = [
  {
    id: 'ORD-001',
    customer: 'Priya Sharma',
    phone: '+91 98765 43210',
    address: 'Hyderabad, Telangana',
    product: 'Water Jar',
    quantity: 2,
    total: 160,
    status: 'delivered',
    date: '2024-02-15',
  },
  {
    id: 'ORD-002',
    customer: 'Rahul Patel',
    phone: '+91 98765 43211',
    address: 'Secunderabad, Telangana',
    product: 'Portable Bottle',
    quantity: 5,
    total: 125,
    status: 'processing',
    date: '2024-02-16',
  },
  {
    id: 'ORD-003',
    customer: 'Dr. Anita Desai',
    phone: '+91 98765 43212',
    address: 'Balapur, Telangana',
    product: 'Event Cup',
    quantity: 100,
    total: 1000,
    status: 'pending',
    date: '2024-02-17',
  },
  {
    id: 'ORD-004',
    customer: 'Amit Jain',
    phone: '+91 90000 05728',
    address: 'Kandukur, Telangana',
    product: 'Water Jar',
    quantity: 4,
    total: 320,
    status: 'shipped',
    date: '2024-02-18',
  },
];

const initialInquiries = [
  {
    id: 1,
    name: 'Suresh Kumar',
    phone: '+91 98765 43213',
    email: 'suresh@email.com',
    message: 'I need 500 event cups for my corporate event next month.',
    status: 'new',
    date: '2024-02-18',
  },
  {
    id: 2,
    name: 'Meena Reddy',
    phone: '+91 98765 43214',
    email: 'meena@email.com',
    message: 'Monthly subscription for 20L jars for our office.',
    status: 'read',
    date: '2024-02-17',
  },
];

const statsData = {
  totalRevenue: 28450,
  totalOrders: 156,
  totalProducts: 12,
  totalCustomers: 89,
  revenueGrowth: 12.5,
  ordersGrowth: 8.3,
};

// --- Components ---

// Sidebar
const Sidebar = ({ activeTab, setActiveTab, isOpen, setIsOpen, onLogout }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'orders', label: 'Orders', icon: ShoppingCart },
    { id: 'inquiries', label: 'Inquiries', icon: MessageSquare },
    { id: 'customers', label: 'Customers', icon: Users },
    { id: 'settings', label: 'Settings', icon: SettingsIcon },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-slate-900 text-white z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <div className="flex items-center gap-3 p-6 border-b border-slate-700/50">
          <Droplets className="h-8 w-8 text-cyan-400" fill="#0284C7" stroke="none" />
          <div>
            <span className="text-xl font-bold">Girnar</span>
            <span className="text-cyan-400 text-xl font-bold">Beverages</span>
            <p className="text-xs text-slate-400">Admin Panel</p>
          </div>
        </div>

        <nav className="p-4 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  activeTab === item.id
                    ? 'bg-cyan-600/20 text-cyan-400 border border-cyan-500/30'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-700/50">
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-all duration-200"
          >
            <LogOut className="h-5 w-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

// Dashboard Stats Cards
const StatsCards = ({ stats }) => {
  const cards = [
    {
      title: 'Total Revenue',
      value: `₹${stats.totalRevenue.toLocaleString()}`,
      change: `+${stats.revenueGrowth}%`,
      icon: DollarSign,
      color: 'from-emerald-500/20 to-emerald-600/10',
      borderColor: 'border-emerald-500/30',
      textColor: 'text-emerald-500',
    },
    {
      title: 'Total Orders',
      value: stats.totalOrders,
      change: `+${stats.ordersGrowth}%`,
      icon: ShoppingCart,
      color: 'from-blue-500/20 to-blue-600/10',
      borderColor: 'border-blue-500/30',
      textColor: 'text-blue-500',
    },
    {
      title: 'Products',
      value: stats.totalProducts,
      change: '+2 this month',
      icon: Package,
      color: 'from-cyan-500/20 to-cyan-600/10',
      borderColor: 'border-cyan-500/30',
      textColor: 'text-cyan-500',
    },
    {
      title: 'Customers',
      value: stats.totalCustomers,
      change: '+12 this week',
      icon: Users,
      color: 'from-purple-500/20 to-purple-600/10',
      borderColor: 'border-purple-500/30',
      textColor: 'text-purple-500',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, idx) => {
        const Icon = card.icon;
        return (
          <motion.div
            key={idx}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
            className={`bg-gradient-to-br ${card.color} border ${card.borderColor} rounded-2xl p-6 backdrop-blur-sm`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500 font-medium">{card.title}</p>
                <p className="text-2xl font-bold text-slate-800 mt-1">{card.value}</p>
                <p className={`text-sm font-medium ${card.textColor} mt-1`}>
                  {card.change}
                </p>
              </div>
              <div className={`p-3 rounded-xl bg-white/50 ${card.textColor}`}>
                <Icon className="h-6 w-6" />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

// Products Management - With Image Upload
const ProductsManagement = () => {
  const { products, addProduct, updateProduct, deleteProduct } = useProducts();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    capacity: '',
    description: '',
    price: '',
    stock: '',
    category: '',
    badge: '',
  });

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddProduct = () => {
    setFormData({
      name: '',
      capacity: '',
      description: '',
      price: '',
      stock: '',
      category: '',
      badge: '',
    });
    setImagePreview(null);
    setImageFile(null);
    setSelectedProduct(null);
    setIsModalOpen(true);
  };

  const handleEditProduct = (product) => {
    setFormData({
      name: product.name,
      capacity: product.capacity,
      description: product.description,
      price: product.price,
      stock: product.stock,
      category: product.category,
      badge: product.badge || '',
    });
    setImagePreview(product.image);
    setImageFile(null);
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('Please upload an image file');
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB');
        return;
      }
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = () => {
    setImagePreview(null);
    setImageFile(null);
  };

  const handleSave = async () => {
    if (!formData.name || !formData.capacity || !formData.price || !formData.stock || !formData.category) {
      alert('Please fill in all required fields');
      return;
    }

    setIsUploading(true);

    try {
      if (selectedProduct) {
        await updateProduct(
          { 
            ...formData, 
            id: selectedProduct.id,
            price: parseFloat(formData.price),
            stock: parseInt(formData.stock),
          },
          imageFile
        );
        alert('Product updated successfully!');
      } else {
        if (!imageFile && !imagePreview) {
          alert('Please upload a product image');
          setIsUploading(false);
          return;
        }
        await addProduct(
          { 
            ...formData,
            price: parseFloat(formData.price),
            stock: parseInt(formData.stock),
          },
          imageFile
        );
        alert('Product added successfully!');
      }
      
      setIsModalOpen(false);
      setSelectedProduct(null);
      setImagePreview(null);
      setImageFile(null);
      setFormData({
        name: '',
        capacity: '',
        description: '',
        price: '',
        stock: '',
        category: '',
        badge: '',
      });
    } catch (error) {
      alert('Error saving product: ' + error.message);
    } finally {
      setIsUploading(false);
    }
  };

  const handleDeleteProduct = (product) => {
    setProductToDelete(product);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    deleteProduct(productToDelete.id);
    setIsDeleteModalOpen(false);
    setProductToDelete(null);
    alert('Product deleted successfully!');
  };

  const getStatusBadge = (status) => {
    const styles = {
      active: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      inactive: 'bg-red-100 text-red-800 border-red-200',
      draft: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    };
    return styles[status] || styles.active;
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Products</h2>
          <p className="text-slate-500">Manage your product catalog</p>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:flex-none">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 w-full sm:w-48"
            />
          </div>
          <button
            onClick={handleAddProduct}
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            <Plus className="h-4 w-4" />
            Add Product
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product, idx) => (
          <motion.div
            key={product.id}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: idx * 0.05 }}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative h-48 bg-slate-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x400?text=No+Image';
                }}
              />
              <span className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium border ${getStatusBadge(product.status)}`}>
                {product.status}
              </span>
              {product.badge && (
                <span className="absolute top-3 left-3 bg-cyan-700/90 text-white text-xs font-medium px-3 py-1 rounded-full">
                  {product.badge}
                </span>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-slate-800">{product.name}</h3>
              <p className="text-sm text-slate-500">{product.capacity}</p>
              <p className="text-sm text-slate-600 mt-1 line-clamp-2">{product.description}</p>
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-100">
                <div>
                  <span className="text-lg font-bold text-slate-800">₹{product.price}</span>
                  <span className="text-xs text-slate-500 ml-1">/ unit</span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEditProduct(product)}
                    className="p-2 text-slate-500 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-colors"
                  >
                    <Edit className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleDeleteProduct(product)}
                    className="p-2 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between mt-2 text-xs text-slate-500">
                <span>Stock: {product.stock} units</span>
                <span>{product.category}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add/Edit Modal with Image Upload */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex justify-between items-center">
                <h3 className="text-xl font-bold text-slate-800">
                  {selectedProduct ? 'Edit Product' : 'Add New Product'}
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="p-6 space-y-4">
                {/* Image Upload Section */}
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-4 text-center hover:border-cyan-400 transition-colors">
                  {imagePreview ? (
                    <div className="relative">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <button
                        onClick={handleDeleteImage}
                        className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white rounded-full p-1.5 shadow-lg transition-colors"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                  ) : (
                    <div className="py-8">
                      <Upload className="h-12 w-12 text-slate-400 mx-auto mb-3" />
                      <p className="text-slate-600 font-medium">Click to upload product image</p>
                      <p className="text-sm text-slate-400 mt-1">PNG, JPG, WEBP (Max 5MB)</p>
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    id="image-upload"
                  />
                  {!imagePreview && (
                    <label
                      htmlFor="image-upload"
                      className="inline-block mt-2 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg cursor-pointer transition-colors"
                    >
                      Choose Image
                    </label>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Product Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      placeholder="Enter product name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Capacity *</label>
                    <input
                      type="text"
                      value={formData.capacity}
                      onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                      placeholder="e.g., 500ml / 1L"
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Description *</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows="3"
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Describe your product"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Price (₹) *</label>
                    <input
                      type="number"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      placeholder="Enter price"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Stock *</label>
                    <input
                      type="number"
                      value={formData.stock}
                      onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      placeholder="Enter stock quantity"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Category *</label>
                    <input
                      type="text"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      placeholder="e.g., Cups, Bottles, Jars"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Badge (optional)</label>
                    <input
                      type="text"
                      value={formData.badge}
                      onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                      placeholder="e.g., Bulk Order, New, Sale"
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                </div>
              </div>
              <div className="sticky bottom-0 bg-white border-t border-slate-200 p-6 flex justify-end gap-3">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  disabled={isUploading}
                  className="px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isUploading ? (
                    <>
                      <RefreshCw className="h-4 w-4 animate-spin" />
                      {selectedProduct ? 'Updating...' : 'Adding...'}
                    </>
                  ) : (
                    <>
                      <Save className="h-4 w-4" />
                      {selectedProduct ? 'Update' : 'Add'} Product
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {isDeleteModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsDeleteModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl max-w-md w-full p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 text-red-600 mb-4">
                <AlertCircle className="h-8 w-8" />
                <h3 className="text-xl font-bold">Delete Product</h3>
              </div>
              <p className="text-slate-600 mb-6">
                Are you sure you want to delete "<span className="font-semibold text-slate-800">{productToDelete?.name}</span>"? This action cannot be undone.
              </p>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setIsDeleteModalOpen(false)}
                  className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Orders Management
const OrdersManagement = ({ orders }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    processing: 'bg-blue-100 text-blue-800 border-blue-200',
    shipped: 'bg-purple-100 text-purple-800 border-purple-200',
    delivered: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    cancelled: 'bg-red-100 text-red-800 border-red-200',
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || order.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Orders</h2>
          <p className="text-slate-500">Manage customer orders</p>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:flex-none">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search orders..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 w-full sm:w-48"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white"
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Total</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-slate-800">{order.id}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{order.customer}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{order.product} × {order.quantity}</td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-800">₹{order.total}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${statusColors[order.status] || statusColors.pending}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">{order.date}</td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => {
                        setSelectedOrder(order);
                        setIsModalOpen(true);
                      }}
                      className="text-cyan-600 hover:text-cyan-700 font-medium text-sm"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && selectedOrder && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl max-w-lg w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-slate-200 flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold text-slate-800">Order Details</h3>
                  <p className="text-sm text-slate-500">{selectedOrder.id}</p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-slate-500">Customer</p>
                    <p className="font-medium text-slate-800">{selectedOrder.customer}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Phone</p>
                    <p className="font-medium text-slate-800">{selectedOrder.phone}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Address</p>
                  <p className="font-medium text-slate-800">{selectedOrder.address}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-slate-500">Product</p>
                    <p className="font-medium text-slate-800">{selectedOrder.product}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Quantity</p>
                    <p className="font-medium text-slate-800">{selectedOrder.quantity}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-slate-500">Total</p>
                    <p className="font-medium text-slate-800">₹{selectedOrder.total}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Status</p>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium border ${statusColors[selectedOrder.status]}`}>
                      {selectedOrder.status}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6 border-t border-slate-200 flex justify-end gap-3">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  Close
                </button>
                <button className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors">
                  Update Status
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Inquiries Management
const InquiriesManagement = ({ inquiries }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredInquiries = inquiries.filter(inq => {
    const matchesSearch = inq.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         inq.phone.includes(searchTerm);
    const matchesStatus = filterStatus === 'all' || inq.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Inquiries</h2>
          <p className="text-slate-500">Manage customer inquiries</p>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:flex-none">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search inquiries..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 w-full sm:w-48"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white"
          >
            <option value="all">All Status</option>
            <option value="new">New</option>
            <option value="read">Read</option>
            <option value="replied">Replied</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {filteredInquiries.map((inquiry) => (
          <div key={inquiry.id} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-700 font-bold">
                    {inquiry.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">{inquiry.name}</h4>
                    <div className="flex flex-wrap gap-3 text-sm text-slate-500">
                      <span className="flex items-center gap-1">
                        <Phone className="h-3 w-3" />
                        {inquiry.phone}
                      </span>
                      <span className="flex items-center gap-1">
                        <Mail className="h-3 w-3" />
                        {inquiry.email}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {inquiry.date}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 mt-3">{inquiry.message}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium border ${
                  inquiry.status === 'new' ? 'bg-red-100 text-red-800 border-red-200' :
                  inquiry.status === 'read' ? 'bg-yellow-100 text-yellow-800 border-yellow-200' :
                  'bg-emerald-100 text-emerald-800 border-emerald-200'
                }`}>
                  {inquiry.status}
                </span>
                <button className="p-2 text-cyan-600 hover:bg-cyan-50 rounded-lg transition-colors">
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Settings Page
const AdminSettings = () => {
  const [businessInfo, setBusinessInfo] = useState({
    name: 'Girnar Beverages',
    gstin: '36AGQPB4234K3Z8',
    fssai: '13626010000424',
    phone: '+91 9542163369',
    phone2: '+91 9246999310',
    email: 'info@girnarBeverages.com',
    address: 'Plot No: 696, Gaganvihar Colony, Balapur Mandal, Rangareddy Dist, Telangana - 500005',
    regAddress: '15-1-52, Flat No. 303, SUKH SHANTI APARTMENTS, Old Feelkhana, Hyderabad - 500012',
  });

  const [socialLinks, setSocialLinks] = useState({
    facebook: '',
    instagram: '',
    twitter: '',
    youtube: '',
    linkedin: '',
  });

  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert('Settings saved successfully!');
    }, 1000);
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-800">Settings</h2>
        <p className="text-slate-500">Manage your business information</p>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Business Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Business Name</label>
              <input
                type="text"
                value={businessInfo.name}
                onChange={(e) => setBusinessInfo({ ...businessInfo, name: e.target.value })}
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">GSTIN</label>
              <input
                type="text"
                value={businessInfo.gstin}
                onChange={(e) => setBusinessInfo({ ...businessInfo, gstin: e.target.value })}
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">FSSAI License</label>
              <input
                type="text"
                value={businessInfo.fssai}
                onChange={(e) => setBusinessInfo({ ...businessInfo, fssai: e.target.value })}
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Primary Phone</label>
              <input
                type="text"
                value={businessInfo.phone}
                onChange={(e) => setBusinessInfo({ ...businessInfo, phone: e.target.value })}
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Secondary Phone</label>
              <input
                type="text"
                value={businessInfo.phone2}
                onChange={(e) => setBusinessInfo({ ...businessInfo, phone2: e.target.value })}
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input
                type="email"
                value={businessInfo.email}
                onChange={(e) => setBusinessInfo({ ...businessInfo, email: e.target.value })}
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-slate-700 mb-1">Manufacturing Address</label>
            <textarea
              value={businessInfo.address}
              onChange={(e) => setBusinessInfo({ ...businessInfo, address: e.target.value })}
              rows="2"
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-slate-700 mb-1">Registered Office Address</label>
            <textarea
              value={businessInfo.regAddress}
              onChange={(e) => setBusinessInfo({ ...businessInfo, regAddress: e.target.value })}
              rows="2"
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Social Media Links</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Facebook</label>
              <input
                type="url"
                value={socialLinks.facebook}
                onChange={(e) => setSocialLinks({ ...socialLinks, facebook: e.target.value })}
                placeholder="https://facebook.com/..."
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Instagram</label>
              <input
                type="url"
                value={socialLinks.instagram}
                onChange={(e) => setSocialLinks({ ...socialLinks, instagram: e.target.value })}
                placeholder="https://instagram.com/..."
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Twitter / X</label>
              <input
                type="url"
                value={socialLinks.twitter}
                onChange={(e) => setSocialLinks({ ...socialLinks, twitter: e.target.value })}
                placeholder="https://twitter.com/..."
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">YouTube</label>
              <input
                type="url"
                value={socialLinks.youtube}
                onChange={(e) => setSocialLinks({ ...socialLinks, youtube: e.target.value })}
                placeholder="https://youtube.com/..."
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 disabled:opacity-50"
          >
            {isSaving ? (
              <>
                <RefreshCw className="h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save className="h-4 w-4" />
                Save Settings
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Admin Component
const Admin = ({ onLogout }) => {
  const { products } = useProducts();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [orders, setOrders] = useState(initialOrders);
  const [inquiries, setInquiries] = useState(initialInquiries);
  const [stats, setStats] = useState(statsData);

  useEffect(() => {
    const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);
    const totalOrders = orders.length;
    const totalProducts = products.length;
    const totalCustomers = new Set(orders.map(o => o.phone)).size;

    setStats({
      totalRevenue,
      totalOrders,
      totalProducts,
      totalCustomers,
      revenueGrowth: 12.5,
      ordersGrowth: 8.3,
    });
  }, [orders, products]);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            <StatsCards stats={stats} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <h3 className="font-semibold text-slate-800 mb-4">Recent Orders</h3>
                <div className="space-y-3">
                  {orders.slice(0, 3).map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <div>
                        <p className="font-medium text-slate-800">{order.customer}</p>
                        <p className="text-sm text-slate-500">{order.product} × {order.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-slate-800">₹{order.total}</p>
                        <span className="text-xs text-slate-500">{order.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <h3 className="font-semibold text-slate-800 mb-4">Recent Inquiries</h3>
                <div className="space-y-3">
                  {inquiries.slice(0, 3).map((inquiry) => (
                    <div key={inquiry.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <div>
                        <p className="font-medium text-slate-800">{inquiry.name}</p>
                        <p className="text-sm text-slate-500 line-clamp-1">{inquiry.message}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        inquiry.status === 'new' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                      }`}>
                        {inquiry.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case 'products':
        return <ProductsManagement />;
      case 'orders':
        return <OrdersManagement orders={orders} />;
      case 'inquiries':
        return <InquiriesManagement inquiries={inquiries} />;
      case 'customers':
        return (
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <h2 className="text-2xl font-bold text-slate-800">Customers</h2>
            <p className="text-slate-500 mt-2">Customer management coming soon...</p>
          </div>
        );
      case 'settings':
        return <AdminSettings />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        onLogout={onLogout}
      />

      <div className="md:ml-64">
        <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
          <div className="px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <Menu className="h-5 w-5" />
              </button>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-cyan-100 rounded-lg">
                  <Droplets className="h-5 w-5 text-cyan-700" fill="#0284C7" stroke="none" />
                </div>
                <span className="text-sm font-medium text-slate-700 hidden sm:block">
                  {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-slate-100 rounded-lg transition-colors">
                <Bell className="h-5 w-5 text-slate-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-700 font-bold">
                  A
                </div>
                <span className="text-sm font-medium text-slate-700 hidden sm:block">Admin</span>
              </div>
            </div>
          </div>
        </header>

        <main className="p-4 sm:p-6 lg:p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Admin;